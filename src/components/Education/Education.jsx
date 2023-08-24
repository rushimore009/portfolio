import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Education.css'; // Import your CSS file for styling

const Education = () => {
  const [showPG, setShowPG] = useState(false);
  const [showUG, setShowUG] = useState(false);
  const [show12th, setShow12th] = useState(false);
  const [show10th, setShow10th] = useState(false);

  const togglePG = () => {setShowPG(!showPG)
                          setShow10th(false)
                          setShow12th(false)
                          setShowUG(false)
                        };
  const toggleUG = () => {setShowPG(false)
                          setShow10th(false)
                          setShow12th(false)
                          setShowUG(!showUG)
                        };
  const toggle12th = () => {setShowPG(false)
                            setShow10th(false)
                            setShow12th(!show12th)
                            setShowUG(false)
                          };
  const toggle10th = () => {setShowPG(false)
                            setShow10th(!show10th)
                            setShow12th(false)
                            setShowUG(false)
                          };

  return (
    <div className="education-container">
      <h3>Education</h3><hr/>
      <div className="education m-2 p-2 division container-fluid" onClick={togglePG}>
      <div className='h3'>{showPG ? <ArrowDropDownIcon fontSize='large'/> : <ArrowRightIcon fontSize='large'/>}Post Graduation</div>
        {showPG && (
          <div className="education-details">
            <table className='table table-striped table-bordered table-hover table-dark shadow' >
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>Post Graduate Diploma in Advanced Computing (PG-DAC)</td>
                </tr>
                <tr>
                  <td>University</td>
                  <td>Centre for Development of Advanced Computing (CDAC), Pune</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>70%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>15 Sept 2022 - 15 March 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="education m-2 p-2 division" onClick={toggleUG}>
      <div className='h3'>{showUG ? <ArrowDropDownIcon fontSize='large'/> : <ArrowRightIcon fontSize='large'/>}Graduation</div>
        {showUG && (
          <div className="education-details">
           <table className='table table-striped table-bordered table-hover table-dark shadow'>
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>BE Civil</td>
                </tr>
                <tr>
                  <td>University</td>
                  <td>Sanjay Ghodawat Institude</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>76%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>June 2016 - March 2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="education m-2 p-2 division" onClick={toggle12th}>
      <div className='h3'>{show12th ? <ArrowDropDownIcon fontSize='large'/> : <ArrowRightIcon fontSize='large'/>}12<sup>th</sup> Grade</div>
        {show12th && (
          <div className="education-details">
            <table className='table table-striped table-bordered table-hover table-dark shadow'>
              <tbody>
                {/* <tr>
                  <td>Degree</td>
                  <td>Post Graduate Diploma in Advanced Computing (PG-DAC)</td>
                </tr> */}
                <tr>
                  <td>Board</td>
                  <td>Maharashtra State Board</td>
                </tr>
                {/* <tr>
                  <td>Grade</td>
                  <td>A+</td>
                </tr> */}
                <tr>
                  <td>Percentage</td>
                  <td>77%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>2015-2016</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="education m-2 p-2 division" onClick={toggle10th}>
      <div className='h3'>{show12th ? <ArrowDropDownIcon fontSize='large'/> : <ArrowRightIcon fontSize='large'/>}10<sup>th</sup> Grade</div>
        {show10th && (
          <div className="education-details">
            <table className='table table-striped table-bordered table-hover table-dark shadow'>
              <tbody>
                {/* <tr>
                  <td>Degree</td>
                  <td>Post Graduate Diploma in Advanced Computing (PG-DAC)</td>
                </tr> */}
                <tr>
                  <td>Board</td>
                  <td>Maharashtra State Board</td>
                </tr>
                {/* <tr>
                  <td>Grade</td>
                  <td>A+</td>
                </tr> */}
                <tr>
                  <td>Percentage</td>
                  <td>84%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>2013 - 2014</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
