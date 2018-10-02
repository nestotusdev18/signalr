using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

namespace VotingApp
{
    public class LiveResults
    {


        public void Send(string name)
        {
            poll[name]++;
            string data = JsonConvert.SerializeObject(poll.Select(x => new { name = x.Key, count = x.Value }).ToList());
            Clients.All.showLiveResult(data);
        }
    }
}