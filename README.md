### Setting Up MySQL Database

1. **Install MySQL Workbench and MySQL Server** 🛠️

   Ensure MySQL Workbench and MySQL Server are installed on your system. You can download them from the official MySQL website:

   - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
   - [MySQL Server](https://dev.mysql.com/downloads/mysql/)

2. **Configure MySQL Workbench** ⚙️

   - Open MySQL Workbench.
   - Create a new connection:
     - Click on the `+` icon next to MySQL Connections.
     - Enter the connection details:
       - **Connection Name:** Give your connection a name.
       - **Hostname:** Typically `localhost`.
       - **Port:** Default is `3306`.
       - **Username:** Root or another MySQL user.
       - **Password:** Store your password securely.
     - Click `Test Connection` to verify and then `OK` to save.

3. **Import SQL Dump File** 📂

   - Open MySQL Workbench and connect to your MySQL server.
   - Create a new database (if necessary):
     - Click on the `Schemas` tab.
     - Right-click and select `Create Schema...`.
     - Enter the database name (e.g., `blog`) and click `Apply` then `Finish`.
   - Import the SQL dump file:
     - Go to `Server` -> `Data Import`.
     - Choose `Import from Self-Contained File`.
     - Select your SQL dump file and choose the target database (`blog`).
     - Click `Start Import`.

4. **Verify Import** ✔️

   - In MySQL Workbench, go to `Schemas`.
   - Right-click and select `Refresh All` to see imported tables.
