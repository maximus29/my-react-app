import React, { useCallback, useId, useState } from 'react';

import { CardProps } from './types';
import { useHandlers, useToggleStates } from './hooks';
import logo from '../../../assets/media/card-image.png';

import clsx from 'clsx';

const Card: React.FC<CardProps> = React.memo(
    ({
        selectedCards,
        disabledCards,
        weight,
        numberServings,
        giftMessage,
        taste,
        setSelectedCards,
        setDisabledCards,
    }) => {
        const [isHovered, setIsHovered] = useState<boolean>(false);
        const [isFirstClick, setIsFirstClick] = useState<boolean>(false);

        const uniqID: string = useId();

        const { isSelectedCard, isDisabledCard, isFirstCard, isSecondCard, isThirdCard } = useToggleStates(
            selectedCards,
            disabledCards,
            uniqID,
            weight,
        );

        const {
            handleSelectCard,
            handleFormatMessage,
            getFooterInfo,
            handleClickEnableDisableButton,
            handleChangeHover,
        } = useHandlers(
            isFirstCard,
            isSecondCard,
            isThirdCard,
            isSelectedCard,
            isDisabledCard,
            setSelectedCards,
            setDisabledCards,
            setIsHovered,
            setIsFirstClick,
        );

        return (
            <div>
                <div
                    className={clsx('card-container', {
                        'card-container-selected': isSelectedCard,
                        'card-container-disabled': isDisabledCard,
                    })}
                    onMouseEnter={() => handleChangeHover()}
                    onMouseLeave={() => handleChangeHover()}
                    onClick={() => handleSelectCard(uniqID)}
                >
                    <div className="card-content">
                        <span
                            className={clsx('title-card', {
                                'disabled-style': isDisabledCard,
                                'hovered-style': isHovered && isSelectedCard && !isDisabledCard && !isFirstClick,
                            })}
                        >
                            {isHovered && isSelectedCard && !isDisabledCard && !isFirstClick
                                ? 'Котэ не одобряет?'
                                : 'Сказочное заморское яство'}
                        </span>
                        <span
                            className={clsx('title-card-bold', {
                                'disabled-style': isDisabledCard,
                            })}
                        >
                            Нямушка
                        </span>
                        <span
                            className={clsx('subtitle-card', {
                                'disabled-style': isDisabledCard,
                            })}
                        >
                            с {taste}
                        </span>
                        <div
                            className={clsx('servings-information', {
                                'disabled-style': isDisabledCard,
                            })}
                        >
                            <span>
                                <b>{numberServings}</b> порций
                            </span>
                            <span>{handleFormatMessage(giftMessage)}</span>
                        </div>
                        <img
                            className={clsx('image-cat', {
                                'disabled-style': isDisabledCard,
                            })}
                            src={logo}
                        />
                        <div
                            className={clsx('circle-weight', {
                                'circle-weight-selected': isSelectedCard,
                                'circle-weight-disabled': isDisabledCard,
                            })}
                        >
                            <span style={{ marginTop: '20px' }}>{weight}</span>
                            <span style={{ fontSize: '21px' }}>кг</span>
                        </div>
                    </div>
                    {isHovered && (
                        <div className="button-list">
                            <button onClick={(e) => handleClickEnableDisableButton(e, uniqID)}>
                                {isDisabledCard ? 'Enable' : 'Disable'}
                            </button>
                        </div>
                    )}
                    <div className="card-border" />
                </div>
                <div
                    className={clsx('footer-card', {
                        'footer-card-span': isDisabledCard,
                    })}
                >
                    <span>{getFooterInfo()}</span>
                    {!isSelectedCard && !isDisabledCard && (
                        <a className="link" onClick={() => handleSelectCard(uniqID)}>
                            купи.
                        </a>
                    )}
                </div>
            </div>
        );
    },
);

export default Card;
