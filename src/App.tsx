import React, {useState} from 'react';
import logo from './logo.svg';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {Container} from "./components/Container";
import {Test1} from "./components/Test1";

type NameListTypes = {
    first: string,
    last: string
}

function App() {
    const [value, setValue] = useState<string | number>(25)
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
            {/*<Status status={"loading"}/>*/}
            {/*<Heading>some text</Heading>*/}
            {/*<Oscar>*/}
            {/*    <Heading>Oscar goes to Leonardo Dicaprio</Heading>*/}
            {/*</Oscar>*/}
            {/*<Greet name={'Vishwas'} messageCount={10} isLoggedIn={true}/>*/}
            {/*<Button handleClick={(event) => console.log(event.currentTarget.innerHTML)}/>*/}
            {/*/!*<Button handleClick={() => console.log(7)}/>*!/*/}
            {/*<Input value={value} handleOnChange={(event) => {*/}
            {/*    setValue(event.currentTarget.value)*/}
            {/*    console.log(event.currentTarget.value)*/}
            {/*}}/>*/}

            {/*<Container styles={{color: 'red'}}/>*/}
            {/*<Greet name={'Vishwas'} messageCount={20} isLoggedIn={false}/>*/}
            {/*<Person name={personName}/>*/}
            {/*<PersonList names={nameList}/>*/}
            <Test1/>
        </div>
    );
}

export default App;
