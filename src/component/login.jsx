
import fbLogo from '../assets/Facebook-Logo.png'

function Login() {
    return (


       
        <div className="app-container" style={{ backgroundColor: '#f0f0f0' }}>
                
                    <img class="mb-4" src={fbLogo} alt="?/" width="200" height="100" />
                

                <div className="card" style={{ width: '27rem', backgroundColor: '#fff' }} >
                    <div className="card-body">
                        <h5 className="card-title">Log in to Facebook</h5>
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        </div>
                        <br />
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        </div>
                        <br />
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>

                        <a href="#" className="card-link">Forgotten account?</a>
                        <a href="#" className="card-link"> Sign up for Facebook</a>
                    </div>
                </div>

            </div >

        

    );

}
export default Login