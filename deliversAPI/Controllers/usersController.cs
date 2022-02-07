using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;

namespace deliversAPI.Controllers
{
    public class usersController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            usersBL userBL1 = new usersBL();
            int count = userBL1.countusers();
            return Request.CreateResponse(HttpStatusCode.OK,count);

        }
    }
}
