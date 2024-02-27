import Tuku from ".//tukumain.png"
import "./styles.css";

export const Main  = () => {
    return (
    <div className="main-row">
        <div className="main-column">
            <div>
            <p style={{color: 'aliceblue', padding: '10px', textAlign: 'right'}}>If you have a word, just say it loud. Say it from your heart. Cause you have to mean what you sing. Say what you mean and you got to sing what you mean, mean what you sing.</p>
            </div>
            <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>Hatikanganwe varere mumasango. Vasina makuva. Vakafira nhaka yavo. Vakafira nyika yavo iyi.</p>
            </div>
            <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>Mwana asingacheme anofira mumbereko</p>
            </div>
            <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>Usakanganwe kwawakabva, kwaunobva</p>
            </div>
            <div className="left-column-one">
            <h2 style={{color: 'aliceblue'}}>vug</h2>
            </div>
        </div>
        <div className="left-column-one">
            <h2 style={{color: 'aliceblue'}}>vug</h2>
            </div>
        <div className="main-column">
            <img src={Tuku} className="tukuimg" style={{height: '90vh'}}/>
        </div>
        <div className="main-column">
        <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>Mwana wamambo, muranda kumwe</p>
        </div>
            
            <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>Kufirwa nemurume hanzvanzi, zvinoda moyo wekushinga. Usaore moyokaNeria, Mwari anewe.</p>
        </div>
        <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>What you do in the dark can be known in a day. Rinemanyanga hariputirwe. What you think is a secret can be a gossip everywhere.</p>
        </div>
        <div className="left-column-one">
            <p style={{color: 'aliceblue'}}>Zuva nezuva haritonge matare ngoromera</p>
        </div>
        </div>
        
    </div>)
}