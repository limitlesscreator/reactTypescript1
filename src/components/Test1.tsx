import React from 'react';

export const Test1 = () => {
    let revenue = 1000
    let bonus = 5

    let res: number = revenue * bonus

    console.log(res)

    const getFullNameArrow = (firstName: string, surName: string):string => {
        return `${firstName} ${surName}`
    }

    console.log(getFullNameArrow('Mike', 'Miller'))
    type InfoType = {
        officeId: number,
        isOpened: boolean,
        contacts: {
            phone: string,
            email: string,
            address: {
                city: string
            }
        }
    }


    let response:InfoType = {
        'officeId': 45,
        'isOpened': false,
        'contacts': {
            'phone': '+79100000000',
            'email': 'my@email.ru',
            'address': {
                'city': 'Moskva'
            }
        },
    }

    const skills: string[] = ['react', 'js', 'ts', 'redux']

    const skillsMore: ReadonlyArray<string> = ['nextJS','sass']

    for (const skill of skills){
        console.log(skill.toUpperCase())
    }

    // skillsMore[0] = '1' error

    const secondRes = skills
        .filter((s: string) => s !== 'ts')
        // .map(s => {}) going be an error
        .reduce((a,b) => a + b)

    const arr:[number,string, ...boolean[]] = [1,'str', true, false]


    return (
        <div>

        </div>
    );
};
