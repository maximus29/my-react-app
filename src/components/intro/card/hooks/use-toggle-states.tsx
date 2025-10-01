import { useMemo } from 'react';

const useToggleStates = (selectedCards: string[], disabledCards: string[], uniqID: string, weight: string) => {
    const isSelectedCard: boolean = useMemo(() => selectedCards.includes(uniqID), [selectedCards, uniqID]);

    const isDisabledCard: boolean = useMemo(() => disabledCards.includes(uniqID), [disabledCards, uniqID]);

    //Костыльное решение определения порядка карточек
    const isFirstCard: boolean = useMemo(() => weight === '0,5', [weight]);

    const isSecondCard: boolean = useMemo(() => weight === '2', [weight]);

    const isThirdCard: boolean = useMemo(() => weight === '5', [weight]);

    return { isSelectedCard, isDisabledCard, isFirstCard, isSecondCard, isThirdCard };
};

export default useToggleStates;
