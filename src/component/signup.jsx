import fbLogo from '../assets/Facebook-Logo.png'

function Signup() {
    return (
        <div className="app-container" style={{ backgroundColor: '#f0f0f0' }}>
            <img class="mb-4" src={fbLogo} alt="?/" width="200" height="100" />
            <div className="card" style={{ width: '27rem', backgroundColor: '#fff' }} >
                <div className="card-body">
                    <h5 className="card-title">Create a new account</h5>
                </div>
            </div>
        </div >
    );
}
export default Signup