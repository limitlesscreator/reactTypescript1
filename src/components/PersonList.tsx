import React from 'react';
import {Name} from "./Person.types";


export type PersonListProps = {
    names: Name[]
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
