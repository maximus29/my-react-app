type TElementsInfo = {
    firstElement: string;
    secondElement: string;
    thirdElement: string;
};

export interface CardProps {
    weight: string;
    taste: string;
    giftMessage: string;
    numberServings: number;
    selectedCards: string[];
    disabledCards: string[];
    setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>;
    setDisabledCards: React.Dispatch<React.SetStateAction<string[]>>;
}

export type TFooterInfo = {
    selected: TElementsInfo;
    disabled: TElementsInfo;
};
