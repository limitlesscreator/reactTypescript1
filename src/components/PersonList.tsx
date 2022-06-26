import React from 'react';


export type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(el => {
                return(
                    <h2>{el.first} {el.last}</h2>
                )
            })}
        </div>
    );
};
