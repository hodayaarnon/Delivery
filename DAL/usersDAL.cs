using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class usersDAL
    {

        public static string cs = "Data Source=den1.mssql8.gear.host;Persist Security Info=True;User ID=transportsdb;Password=Lq1f7C-BGo~N";
        public static SqlConnection con = new SqlConnection(cs);
        public DataTable getCount()
        {
            string query = "select * from users";
            SqlCommand com = new SqlCommand(query, con);
            con.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(com);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                con.Close();
            }
            //return 674;
        }
        //get parameters and store proc
        public DataTable getData(string usp, string uParam)
        {
            DataSet ds = new DataSet();
            try
            {
                string parm = uParam.Replace("&", "&amp;");
                SqlParameter sparam;
                SqlDataAdapter da;

                con.Open();
                SqlCommand com = new SqlCommand(usp, con);
                com.CommandType = CommandType.StoredProcedure;

                if (parm.Length != 0)
                {
                    sparam = new SqlParameter("@xmlparm", parm);
                    sparam.Direction = ParameterDirection.Input;
                    sparam.DbType = DbType.String;
                    com.Parameters.Add(sparam);
                }
                da = new SqlDataAdapter(com);
                da.Fill(ds, usp);

            }
            catch (Exception e)
            { throw e; }
            finally
            {
                con.Close(); con.Dispose();
            }
            return ds.Tables[0];
        }


    }
}

