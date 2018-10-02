using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;


namespace VotingApp.Models
{
    public class DataRepository 
    {
        /*
        public List<Dashboard> GetDashboard()
        {
            List<Dashboard> Dashboard = new List<Dashboard>();
            using (var connection = new SqlConnection(@"Data Source=DESKTOP-AQ0H8S4\SQLEXPRESS;Initial Catalog=SignalR;Integrated Security=True;"))
            {
                connection.Open();
                using (var command = new SqlCommand("SELECT * FROM ObjectInfo", connection))
                {

                    command.Notification = null;

                    var dependency = new SqlDependency(command);
                    dependency.OnChange += new OnChangeEventHandler(dependency_OnChange);

                    if (connection.State == ConnectionState.Closed)
                        connection.Open();
                        SqlDataReader reader;
                        reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Dashboard obj = new Dashboard();
                        obj.FloorName = (string)reader["FloorName"];
                        obj.UniqueId = (int)reader["UniqueId"];
                        obj.RoomType = (int)reader["RoomType"];
                        obj.IsEmergency = (bool)reader["IsEmergency"];
                        obj.CurrentCount = (int)reader["CurrentCount"];
                        obj.LongStay = (int)reader["LongStay"];
                        obj.LongRecent = (int)reader["LongRecent"];
                        obj.WrongPerson = (int)reader["WrongPerson"];
                        obj.WrongPersonRecent = (int)reader["WrongPersonRecent"];
                        Dashboard.Add(obj);
                    }
                }
            }
            return Dashboard;
        }

        private void dependency_OnChange(object sender, SqlNotificationEventArgs e)
        {
            VotingHub.Show();
        }
        */

        public IEnumerable<Dashboard> GetData()
        {

            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(@"SELECT * FROM  [dbo].[ObjectInfo]", connection))
                {
                    // Make sure the command object does not already have
                    // a notification object associated with it.
                    command.Notification = null;

                    SqlDependency dependency = new SqlDependency(command);
                    dependency.OnChange += new OnChangeEventHandler(dependency_OnChange);

                    if (connection.State == ConnectionState.Closed)
                        connection.Open();

                    using (var reader = command.ExecuteReader())
                        return reader.Cast<IDataRecord>()
                            .Select(x => new Dashboard()
                            {
                                FloorName = x.GetString(1),
                                UniqueId = x.GetInt32(2),
                                RoomType = x.GetInt32(3),
                                IsEmergency = x.GetBoolean(4),
                                CurrentCount = x.GetInt32(5),
                                LongStay = x.GetInt32(6),
                                LongRecent = x.GetInt32(7),
                                WrongPerson = x.GetInt32(8),
                                WrongPersonRecent = x.GetInt32(9)
                            }).ToList();
                }
            }
        }
        private void dependency_OnChange(object sender, SqlNotificationEventArgs e)
        {
            System.Diagnostics.Debug.Write(e.Type);
            System.Diagnostics.Debug.Write(SqlNotificationType.Change);
            //if (e.Type == SqlNotificationType.Change) { 
                System.Diagnostics.Debug.Write("vasaupdate");
                VotingHub.Show();
            //}
        }

    }
}