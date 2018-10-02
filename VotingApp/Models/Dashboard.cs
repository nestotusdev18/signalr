using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Models
{
    public class Dashboard
    {
        public string FloorName { get; set; }
        public int UniqueId { get; set; }
        public int RoomType { get; set; }
        public bool IsEmergency { get; set; }
        public int CurrentCount { get; set; }
        public int LongStay { get; set; }
        public int LongRecent { get; set; }
        public int WrongPerson { get; set; }
        public int WrongPersonRecent { get; set; }
    }
}