import React from 'react';
import logo from './logo.svg';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";

type NameListTypes = {
    first: string,
    last: string
}

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const nameList: NameListTypes[] = [
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Clark',
            last: 'Kent'
        },
        {
            first: 'Princess',
            last: 'Diana'
        }
    ]

    return (
        <div className="App">
            <Status status={"loading"}/>
            <Heading>some text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio</Heading>
            </Oscar>
            <Greet name={'Vishwas'} messageCount={10} isLoggedIn={true}/>
            {/*<Greet name={'Vishwas'} messageCount={20} isLoggedIn={false}/>*/}
            {/*<Person name={personName}/>*/}
            {/*<PersonList names={nameList}/>*/}
        </div>
    );
}

export default App;
