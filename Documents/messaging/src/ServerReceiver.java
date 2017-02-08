import java.net.*;
import java.io.*;
// Gets messages from client and puts them in a queue, for another
// thread to forward to the appropriate client.
public class ServerReceiver extends Thread {
  private String myClientsName;
  private BufferedReader myClient;
  private ClientTable clientTable;
  private boolean check = true;
  public ServerReceiver(String n, BufferedReader c, ClientTable t) {
    myClientsName = n;
    myClient = c;
    clientTable = t;
  }
  public void run() {
    try {
      while (check) {
    	String command = myClient.readLine();
        
        if(command.equals("register")) {
        	String username = myClient.readLine();
        	clientTable.registerUsername(username);
        	System.out.println("User is registered");
        	//clientTable.registerUser(text)//adds to array in clientTable
        	//print its registers
        	//isRegistered is in boolean in clientTable class
        }
        else if(command.equals("login")) {
        	String username = myClient.readLine();
        	clientTable.LoggedIn(username);
        	System.out.println("User is logged in");
       
        }
        
        //else
        	//System.out.println("There is no registered user, try again");
        	//return;
        
        //else its not register 
    
        else if(command.equals("msg")){
        	String username = myClient.readLine();
        	String text = myClient.readLine();
        	if (command != null && text != null) {
                Message msg = new Message(myClientsName, text);
                MessageQueue commandQueue = clientTable.getQueue(command); // Matches EEEER in ServerSender.java
                if (commandQueue != null)
                  commandQueue.offer(msg);
                else
                  Report.error("Message for unexistent client "
                               + command + ": " + text);
            }
        
        }
        else if(command.equals("logout")) {
        	String username = myClient.readLine();
        	clientTable.LoggedOut(username);
        	System.out.println("User is logged out.");
    
        }
        else if(command.equals("quit")) {
        	Message msg = new Message(myClientsName, "quit");
            MessageQueue commandQueue = clientTable.getQueue(myClientsName);
        	if (commandQueue != null)
                commandQueue.offer(msg);
        	check=false;
        	
        	
        }
        else
          // No point in closing socket. Just give up.
          return;
        }
      
      //delete clientID to remove from clientTable 
      }
    catch (IOException e) {
      Report.error("Something went wrong with the client " 
                   + myClientsName + " " + e.getMessage()); 
      // No point in trying to close sockets. Just give up.
      // We end this thread (we don't do System.exit(1)).
    }
    
   
  }
}
