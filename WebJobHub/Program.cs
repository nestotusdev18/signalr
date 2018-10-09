using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.Client;
using Microsoft.Owin.Hosting;
using Microsoft.Owin.Host.HttpListener;
using VotingApp;

namespace WebJobHub
{
    class Program
    {
        static void Main(string[] args)
        {

            string url = "http://localhost:45461";
            using (WebApp.Start<Startup>(url))
            {
                Console.WriteLine("Server running on {0}", url);
                Console.ReadLine();
            }

            System.Console.Read();
        }
    }
}
