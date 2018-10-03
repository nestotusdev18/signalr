using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VotingApp.Models;

namespace VotingApp.Controllers
{
    public class HomeController : Controller
    {
        public List<Dashboard> DataObject { get; private set; }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Datacount()
        {
            DataRepository cmd = new DataRepository();
            DataObject = cmd.GetDashboard();
            return Json(DataObject, JsonRequestBehavior.AllowGet);
        }

        
        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

       

    }
}