

import './Chard.css';
export default function Chard() {
    let employees = [
        {
            name: "John Doe",
            job: "Web Developer",
            imagePath: "https://assets.codepen.io/1480814/adam-argyle.png"
        },
        {
            name: "Jane Smith",
            job: "Graphic Designer",
            imagePath: "path/to/image2.jpg"
        },
        {
            name: "Mike Johnson",
            job: "Project Manager",
            imagePath: "path/to/image3.jpg"
        }
    ];
    return (
        <div className='technologyHome-conteiner-team-card'>
            <div className='grip'>
                {employees.map((employe, key)=>(
                  <div key={key} className='technologyHome-card-gray'>
                  <div className='technologyHome-card'>
                      <div className='technologyHome-card-imagen'>
                          <img src="https://assets.codepen.io/1480814/adam-argyle.png" alt="Adam argyle" />
                      </div>
                      <div className='technologyHome-card-text'>
                          <div className='technologyHome-card-text-name'>{employe.name}</div>
                          <div className='technologyHome-card-text-work'>{employe.job}</div>
                      </div>
                  </div>
                  </div>
                ))}
            </div>
        </div>
    );
}