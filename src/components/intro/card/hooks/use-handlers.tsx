import { useCallback } from 'react';

import { FooterInfo } from '../utils';

import { JSX } from 'react/jsx-runtime';

const useHandlers = (
    isFirstCard: boolean,
    isSecondCard: boolean,
    isThirdCard: boolean,
    isSelectedCard: boolean,
    isDisabledCard: boolean,
    setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>,
    setDisabledCards: React.Dispatch<React.SetStateAction<string[]>>,
) => {
    const handleSelectCard = useCallback(
        (id: string) => {
            if (!isDisabledCard) {
                setSelectedCards((oldValue) => {
                    const newValue: string[] = [...oldValue];

                    const findElementPosition: number = newValue.findIndex((x) => x === id);

                    if (findElementPosition > -1) {
                        newValue.splice(findElementPosition, 1);
                    } else {
                        newValue.push(id);
                    }

                    return newValue;
                });
            }
        },
        [isDisabledCard, setSelectedCards],
    );

    const handleFormatMessage = useCallback((message: string): (string | JSX.Element)[] => {
        const parts: string[] = message.split(/(\d+)/);

        return parts.map((part, index) => (/\d+/.test(part) ? <strong key={index}>{part}</strong> : part));
    }, []);

    const getFooterInfo = useCallback(() => {
        let result: string = 'Чего сидишь? Порадуй котэ, ';

        if (isDisabledCard) {
            if (isFirstCard) {
                result = FooterInfo.disabled.firstElement;
            } else if (isSecondCard) {
                result = FooterInfo.disabled.secondElement;
            } else {
                result = FooterInfo.disabled.thirdElement;
            }
        } else if (isSelectedCard) {
            if (isFirstCard) {
                result = FooterInfo.selected.firstElement;
            } else if (isSecondCard) {
                result = FooterInfo.selected.secondElement;
            } else {
                result = FooterInfo.selected.thirdElement;
            }
        }

        return result;
    }, [isSelectedCard, isDisabledCard, isFirstCard, isSecondCard, isThirdCard]);

    const handleClickEnableDisableButton = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
            e.preventDefault();
            e.stopPropagation();

            setDisabledCards((oldValue) => {
                const newValue: string[] = [...oldValue];

                const findElementPosition: number = newValue.findIndex((x) => x === id);

                if (findElementPosition > -1) {
                    newValue.splice(findElementPosition, 1);
                } else {
                    newValue.push(id);
                }

                return newValue;
            });
        },
        [setDisabledCards],
    );

    return { handleSelectCard, handleFormatMessage, getFooterInfo, handleClickEnableDisableButton };
};

export default useHandlers;
