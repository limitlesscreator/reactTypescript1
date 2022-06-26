import React from 'react';

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    return (
        <div>
            {props.status === 'loading' ? <h2>Loading...</h2> : null}
            {props.status === 'success' ? <h2>Data fetched successfully!</h2> : null}
            {props.status === 'error' ? <h2>Error fetching data</h2> : null}
        </div>
    );
};
