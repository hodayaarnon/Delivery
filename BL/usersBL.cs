using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BL
{
    public class usersBL
    {
        public int countusers()
        {
            
            DAL.usersDAL userDL1 = new usersDAL();
            DataTable dt = userDL1.getCount();
            
            return dt.Rows.Count;
        }
    }
}
