function DonationTile(props){
    return(<div className='data-box'><p>{props.donation.email} : {props.donation.price} </p></div>);


}

export default DonationTile