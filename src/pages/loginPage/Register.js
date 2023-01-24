import { useState } from 'react';

function Login1() {
    const [values, setValues] = useState({
        username: "",
        password: "",
        age: "",
        bio: "",
         gender: "",
        userType: "cororate",
        tac: false,
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.prevetDefault();
        console.log(values);
    }

    return (
        <div className=''>
            <header className="">
                <form action="" onSubmit={submitHandler}>
                    <div className=''>
                        <label htmlFor="username">Username:</label>
                        <input
                            id='username'
                            type="text"
                            name='username'
                            onChange={changeHandler}
                            value={values.username}
                            placeholder='Dimo Yankov'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' value={values.password} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" id='age' name='age' value={values.age} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <input type="text" id='bio' name='bio' value={values.bio} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="individual-user-type">Individual:</label>
                        <input type="radio" name="userType" value='individual' id='índividual' onChange={changeHandler} />
                        <label htmlFor="corporate-user-type">Corporate:</label>
                        <input type="radio" name='userType' value="corporatate" id="corporate-user-type" onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="tac">Terms and Cinditions:</label>
                        <input type="checkbox" name='tac' id='tac' checked={values.tac} onChange={changeHandler} />
                    </div>

                    <div>
                        <input type="submit" value='register' disabled={!values.tac} />
                    </div>
                </form>
            </header>
        </div>
    )


}

export default Login1;