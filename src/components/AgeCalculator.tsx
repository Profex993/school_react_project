import {useState} from 'react';
import {calcAge} from '../utils';

function AgeCalculator() {
    const [birthYear, setBirthYear] = useState(0);
    const [age, setAge] = useState(0);

    const handleChange = (e:any) => {
        const value = e.target.value;
        setBirthYear(value);
        if (value && !isNaN(value)) {
            setAge(calcAge(parseInt(value, 10)));
        } else {
            setAge(0);
        }
    };

    return (
        <div>
            <label>
                Zadej tvůj věk:
                <input type="number" value={birthYear} onChange={handleChange}/>
            </label>
            {age !== null && <p>Tvůj rok narození je: {age}</p>}
        </div>
    );
}

export default AgeCalculator;