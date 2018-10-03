var StreamContainer = React.createClass( {
    getInitialState: function() {
        return {           
            current_data: {  },
            user_choice: "",
			is_done: false           
        };
    },
	componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState( {           
            current_data: data,
            user_choice: "",
			is_done: false           
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
   },
   selectedAnswer: function( option ) {
        this.setState( { user_choice: option } );
   },
    handleSubmit: function() {           			

				var selectedChoice = this.state.user_choice;
				 var vhub = $.connection.votingHub;
				  $.connection.hub.start().done(function () {				
                    vhub.server.send();
				});
				this.setState({ is_done: true });
        },
    render: function() {
		
        var self = this;
		console.log(this.state.current_data);
		 var button_name = "Submit";
			
		 var color_class = "#30bea1";
		 
		 var allProfiles = Object.values(this.state.current_data).map((value) => {
			 
		
			 
			 return (
					<div className="row">
					   <div className="col-md-12">
						  <div className="col-md-6">
							 <div className="card">
								<div className="cardcontainer">
								   <div className="row">
									  <div className="col-md-12 cardpad">
										
										<div className="col-md-2 imgdiv"  style={{background: '#30bea1'}}>
										
										 <img src="../content/images/boy-icon.png"/>
									  </div>
									  <div className="col-md-4">
										 <br/>
										 <h4>{value.FloorName}</h4>
										 <h5>UNIQUE: {value.UniqueId}</h5>
									  </div>
									  <div className="col-md-2">
										 <div className="">
											<h1 className="total" align="center">{value.CurrentCount}</h1>
											<h5 align="center">Current</h5>
										 </div>
									  </div>
									  <div className="col-md-2">
										 <div className="vl" align="center">
											<h1 align="center" className="green">{value.LongStay}<sub>+{value.LongRecent}</sub></h1>
											<h5 align="center" className="long">Long Stay</h5>
										 </div>
									  </div>
									  <div className="col-md-2">
										 <div className="vl" align="center">
											<h1 className="wrong" align="center">{value.WrongPerson}<sub>+{value.WrongPersonRecent}</sub></h1>
											<h5 align="center">Wrong Person</h5>
										 </div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <div className="col-md-6">
						  <div className="card">
							 <div className="cardcontainer">
								<div className="row">
								   <div className="col-md-12 cardpadgl">
									  <div style={{margin : '0px 0px 0px -40px'}}>
									  <div className="col-md-4" >
										 <br/>
										 <h4>{value.FloorName}</h4>
										 <h5>UNIQUE: {value.UniqueId}</h5>
									  </div>
									  <div className="col-md-2" >
										 <div className="">
											<h1 className="total" align="center">{value.CurrentCount}</h1>
											<h5 align="center">Current</h5>
										 </div>
									  </div>
									  <div className="col-md-2">
										 <div className="vl" align="center">
											<h1 align="center" className="green">{value.LongStay}<sub>+{value.LongRecent}</sub></h1>
											<h5 align="center" className="long">Long Stay</h5>
										 </div>
									  </div>
									  <div className="col-md-2">
										 <div className="vl" align="center">
											<h1 className="wrong" align="center">{value.WrongPerson}<sub>+{value.WrongPersonRecent}</sub></h1>
											<h5 align="center">Wrong Person</h5>
										 </div>
									  </div>
								   </div>
								   <div className="col-md-2 imgdiv" style={{background: '#e94d66'}}>
								   <img src="../content/images/girl-icon.png"/>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					</div>
					</div>
					</div>
			)
		 });
		 
		return(
			<div className="streamContainer">
			   <div className="row">
				  <div className="col-md-12">
					 <div className="col-md-8">
						{allProfiles}
					 </div>
					 <div className="col-md-4">
						<div className="card">
						   <div className="cardcontainer">
							  <h4 style={{}}>LIVE STREAM</h4>
							  <hr/>
								  
								  <div className="m-timeline-2">
									 <div className="m-timeline-2__items  m--padding-top-25 m--padding-bottom-30">
									 
										
										
										<div className="m-timeline-2__item">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
										   <span className="m-timeline-2__item-time">
										   <b>Ground floor</b>
										   </span>
										   <div className="m-timeline-2__item-cricle">
											  <i className="fa fa-circle" style={{color: '#30bea1'}}></i>
										   </div>
										   <div className="m-timeline-2__item-text  m--padding-top-5">
											  Boys Long stay in Bath room
											  <br/> 2mins ago
										   </div>
										</div>
										
									 </div>
								  </div>
						   </div>
						</div>
					 </div>
				  </div>
			   </div>
			   <div className="row">
				  <div className="col-md-12  m--padding-top-25 " >
					 <button id="submit" className="btn btn-default" onClick={this.handleSubmit}>{button_name}</button>    
				  </div>
			   </div>
			</div>
        );
    }
});

React.render(
    <StreamContainer url="/home/datacount" />,
    document.getElementById('container')
);