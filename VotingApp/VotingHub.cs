using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Newtonsoft.Json;
using VotingApp.Models;

namespace VotingApp
{
    public class VotingHub : Hub
    {
        public List<Dashboard> DataObject { get; private set; }

        public void Send(int SchoolId)
        {
            DataRepository cmd = new DataRepository();
            DataObject = cmd.GetDashboard(SchoolId);
            Clients.All.showLiveResult(JsonConvert.SerializeObject(DataObject));
        }

    }

}