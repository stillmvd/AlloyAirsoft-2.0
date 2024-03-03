import React, { FC, ReactElement } from 'react';

const EventCard: FC = (): ReactElement => {
    return (
        <div className='eventsCntainer_card'>
            <img src='/img/map.jpg' alt='Map' className='card_map' />
            <div className='card-info'>
                <div className='card-info_date'>
                    <p>
                        Aug19
                    </p>
                </div>
                <div className='card-info_title'>
                    <h2>
                        Summer hunt
                    </h2>
                </div>
                <div className='card-info_block'>
                    <div className='block_location'>
                        <p>
                            Clarington Woods
                        </p>
                        <div className='block_hr'></div>
                    </div>
                    <p className='block_price'>
                        50$
                    </p>
                </div>
            </div>
        </div>
    )
};

export default EventCard;