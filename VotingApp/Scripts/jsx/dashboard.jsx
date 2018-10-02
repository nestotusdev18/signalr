var dataInit = [   
];

var DashboardApp = React.createClass({

	getInitialState: function() {
        return {           
            current_data: {  },
        };
    },
	componentDidMount: function () {
			var self =this;
		           
			 $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState( {           
            current_data: data,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
			
			//SignalR Code
			var vhub = $.connection.votingHub;
         
            vhub.client.showLiveResult = function (data) {
				console.log(data);
				var obj = $.parseJSON(data);	
				self.setState({data: obj});							                
            };	

			$.connection.hub.start();	


	},

	    render: function() {
		
        var self = this;
		console.log(this.state.current_data);
		 var allProfiles = Object.values(this.state.current_data).map((value) => {
			 return (
					<div className="row">
						 <div className="col-md-12">
							<div className="col-md-4">
								<div className="card">
									<div className="cardcontainer">
										<div className="row">
											<div className="col-md-12 cardpad">
												<div className="col-md-2 imgdiv" style={{background: '#30bea1'}}>
													<img src="content/images/boy-icon.png"/>
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
													<h1 align="center" className="green">05<sub>+2</sub></h1>
													<h5 align="center" className="long">Long Stay</h5>
												</div>	
												</div>
												<div className="col-md-2">
													 <div className="vl" align="center">
														<h1 className="wrong" align="center">01<sub>+2</sub></h1>
														<h5 align="center">Wrong Person</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
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
															<h1 align="center" className="green">05<sub>+2</sub></h1>
															<h5 align="center" className="long">Long Stay</h5>
														</div>	
														</div>
														<div className="col-md-2">
															 <div className="vl" align="center">
																<h1 className="wrong" align="center">01<sub>+2</sub></h1>
																<h5 align="center">Wrong Person</h5>
															</div>
														</div>
													</div>
													<div className="col-md-2 imgdiv" style={{background: '#30bea1'}}>
														<img src="content/images/girl-icon.png"/>
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
				<div className="DashboardApp">
					{allProfiles}
				</div>
        );
    }

});



React.render(
    <DashboardApp url="/home/datacount" />,
    document.getElementById('container')
);