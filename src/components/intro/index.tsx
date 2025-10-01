import React, { useState } from 'react';

import Card from './card';

interface IntroPageProps {}

const IntroPage: React.FC<IntroPageProps> = React.memo(() => {
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [disabledCards, setDisabledCards] = useState<string[]>([]);

    return (
        <div className="container">
            <div className="title-container">
                <span>{'Ты сегодня покормил кота?'}</span>
            </div>
            <div className="box-container">
                <Card
                    weight={'0,5'}
                    numberServings={10}
                    taste={'фуа-гра'}
                    giftMessage={'мышь в подарок'}
                    selectedCards={selectedCards}
                    disabledCards={disabledCards}
                    setSelectedCards={setSelectedCards}
                    setDisabledCards={setDisabledCards}
                />
                <Card
                    weight={'2'}
                    numberServings={40}
                    taste={'рыбой'}
                    giftMessage={'2 мыши в подарок'}
                    selectedCards={selectedCards}
                    disabledCards={disabledCards}
                    setSelectedCards={setSelectedCards}
                    setDisabledCards={setDisabledCards}
                />
                <Card
                    weight={'5'}
                    numberServings={100}
                    taste={'курой'}
                    giftMessage={'5 мышей в подарок \n заказчик доволен'}
                    selectedCards={selectedCards}
                    disabledCards={disabledCards}
                    setSelectedCards={setSelectedCards}
                    setDisabledCards={setDisabledCards}
                />
            </div>
        </div>
    );
});

export default IntroPage;
