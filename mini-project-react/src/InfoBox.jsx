import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    let INIT_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const URL_HOT = "https://images.unsplash.com/photo-1682007049179-ea0223283a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHdlYXRoZXIlMjBjYXJ0b29ufGVufDB8fDB8fHww";
    const URL_COLD = "https://images.unsplash.com/photo-1687716005788-3a31b81f70f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjB3ZWF0aGVyJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D";
    const URL_RAIN = "https://plus.unsplash.com/premium_photo-1720597862968-4f1a5fbbfbc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJhaW55JTIwd2VhdGhlciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D"
    return (
        <div className="InfoBox">
            <div className='classContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? URL_RAIN : info.temp > 15 ? URL_HOT : URL_COLD}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperatue={info.temp}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temp={info.tempMin}&deg;C</p>
                            <p>Max Temp={info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}