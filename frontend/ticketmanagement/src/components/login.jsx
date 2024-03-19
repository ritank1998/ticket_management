import React , {useState} from 'react';
import Navbar from './navbar';


const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const takeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const takePassword=(e)=>{
        setPassword(e.target.value)
    }
    console.log(email)
    console.log(password)


    const payload = {
        email , 
        password
    }
    const submit = async()=>{
        try{
              const response = await fetch('http://localhost:1203/tickets/signin', {
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(payload)
              })
              if(response.ok){
                window.location.href('/home')
              }
              else{
                alert("OOPs Try Again")
              }
    }
    catch(err){
        console.log({err: err.message})
    }
}


    return (
        
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={takeEmail}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={takePassword}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
