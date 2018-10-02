using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Newtonsoft.Json;
using VotingApp.Models;

namespace VotingApp
{
    public class VotingHub : Hub
    {

        public static Dictionary<string, int> poll = new Dictionary<string, int>(){
             {"Apples",10 },
             {"Oranges",10},
             {"Bananas",10},
             {"Blueberries",10},
             {"mangoes",10},        
        };

        public static void Show1()
        {
            //poll[name]++;
            //string data = JsonConvert.SerializeObject(poll.Select(x => new { name = x.Key, count = x.Value }).ToList());
            //Clients.All.showLiveResult(Dashboard);
            //IHubContext context = GlobalHost.ConnectionManager.GetHubContext<VotingHub>();
            //context.Clients.All.updateMessages();
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext<VotingHub>();
            context.Clients.All.displayStatus();
        }

        public static void Show()
        {
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext<VotingHub>();
            context.Clients.All.displayStatus();
        }

        public void send(Dashboard Dashboard)
        {
            Clients.All.showLiveResult(Dashboard);
        }

    }

}