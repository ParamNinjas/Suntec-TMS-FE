import React from 'react'
import { Typography, Button, Container } from '@material-ui/core'


const Load = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 50
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
	
		
	return (
		<Container>
			
		<div className='loading'>
			<div className='tag'>
				<Typography>CL 02 GB GP</Typography>	
			</div>
			
			<div className='loadConBtn'>
				<Button className='btnCall' variant="contained">Call</Button>
				<Button className='btnEmail' variant="contained">Email</Button>
			</div>
			<div className='loadNV'>
			<ul>
                <li>Information</li>
                <li>Vehicle info</li>
                <li>Company</li>
                <li>Billing</li>
            </ul>
			</div>
			<div className='imangeList' >
				<img src="/img/1.jpg" 
				alt="t1"
				/>
				<img src="/img/2.jpg" 
				alt="t2"
				/>
				<img src="/img/3.jpg" 
				alt="t3"
				/>
				<img src="/img/4.jpg" 
				alt="t4"
				/>
				<Button className='docBtn' variant='contained'>Documents</Button>
			</div>
			<Typography>loading capacity</Typography>
			<div className='lodingCap' style={{ backgroundImage: "url(/img/truck.png)"}}>
				<div className='progress' style={Parentdiv} >
					<div style={Childdiv}>
						<span style={progresstext}>{`${progress}%`}</span>
					</div>
				</div> 
			</div>	
				<div className='truckInfo'>
					<Typography className='Tinfo'>Truck </Typography>
					<Typography className='weight'>weight</Typography>
					<Typography className='pallets'>Pallets</Typography>
					<Typography className='space'>Space</Typography>
					<Typography className='volume'>Volume</Typography>
				</div>
		</div>
		</Container>
	)
}

export default Load