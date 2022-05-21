
import Contectnumber from './Contectnumber'
//import Locat from './Locat'
import Opbutton from './Opbutton'
import Ridenumer from './Ridenumer'
import Rideradiobtn from './Rideradiobtn'
//import bgimg from '../../src/bg.png'
//import images from '../../src/images.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Form() {
    
    
    const notify = () => toast('Rightdown Your Name!' );
    return (

        <div className="name-hader container my-3 mx-600">
            <div className="form-container">
                <div className="grid-form-container"  >
                    <fieldset className='my-2'> <legend> <h5> Name of person who is book ride:*</h5></legend>
                        <input type="text" onClick={notify}  className="form-control" id="first name" required placeholder="" /><ToastContainer />
                    </fieldset>

                    <fieldset className='my-2'>
                        <legend><h5>Contect_number </h5></legend>
                        <Contectnumber />
                    </fieldset>

                    <fieldset className='my-2'> <legend> <h5> Name of  Rider:*</h5></legend>
                        <input type="text" onClick={notify} className="form-control" id=" Name of  Rider" required placeholder="" /><ToastContainer />
                    </fieldset>

                    <fieldset className='my-2'>
                        <legend><h5>Contect_number of Rider:* </h5></legend>
                        <Contectnumber />
                    </fieldset>
                    <Ridenumer />
                </div>
               {/*  <div className="grid-form-container"><img src={images}  alt="This is an image" /></div>*/}
               {/* <div className='grid-form-container'>

                    <section className='one-fourth' id='bg'>
                        <img src={bgimg} alt="Tis is an immage" />
                    </section>

                </div>*/}
            </div>

            <div>
                <Rideradiobtn />
            </div>
            <div>
                <Opbutton />
            </div>

      {/*<Locat/>*/}

        </div>

    )
}
