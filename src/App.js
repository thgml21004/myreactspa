import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './img/google_logo.svg'

const App = () => {
  return (
    <header id="hd" className='border-bottom'>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className='col-2 col-md-2'>
          <a href="" className='d-block'>
            <img src={logo} alt='로고' className='w-100'></img>
          </a>
        </h1>
        <ul id="gnb" className="d-flex">
          <li><a href="" className='text-dark ms-2'>대메뉴</a></li>
          <li><a href="" className='text-dark ms-2'>대메뉴</a></li>
          <li><a href="" className='text-dark ms-2'>대메뉴</a></li>
          <li><a href="" className='text-dark ms-2'>대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;
