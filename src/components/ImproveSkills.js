import pro1 from '../assets/pro1.jpg'

export default function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img style={{ width: '348px', height: '320px' }} src={pro1} alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">singup now</button>
            </div>
        </div>
    )
}