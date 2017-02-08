// Each nickname has a different incomming-message queue.
import java.util.ArrayList;
import java.util.concurrent.*;
public class ClientTable {
	private ConcurrentMap<String,MessageQueue> loggedInTable = new ConcurrentHashMap<String,MessageQueue>();
	private ArrayList<String> registered = new ArrayList<String>();
  
  
  //create ArrayList to store users
  //add another hashmap thats int string creates clientTable to check that no more than one user
  
  // The following overrides any previously existing nickname, and
  // hence the last client to use this nickname will get the messages
  // for that nickname, and the previously existing clients with that
  // nickname won't be able to get messages. Obviously, this is not a
  // good design of a messaging system. So I don't get full marks:
  public void add(String iD) {
    loggedInTable.put(iD, new MessageQueue());
  }
  // Returns null if the nickname is not in the table:
  public MessageQueue getQueue(String iD) {
    return loggedInTable.get(iD);
  }
  //how to create table to store clientID's//username
  
    public boolean registerUsername(String username) {
    	if(!(registered.contains(username))) {
    		registered.add(username);
    		return true;
    	}
    	return false;
	  
    }
   
    public boolean Registered(String username) {
    	if(registered.contains(username)) {
    		return true;
    	
    	}
    		return false;
    	
    }
    
   // public MessageQueue getMQueue(String username) {
    	//return loggedInTable.get();
    //}
    //gteMessageQueue
   
    
    public boolean LoggedIn(String username) {
    	if(Registered(username)) {
    	loggedInTable.put(username, new MessageQueue());
    		return true;
   
    	}
    	return false;
    	
    }
    
    public boolean LoggedOut(String username) {
    	if(LoggedIn(username)) { 
    	loggedInTable.remove(username);
    	return true;
        }
    	return false;
    }	

  
  //two tables added, array list and hashmap table for no more than one, if string emoty not logged in, and string length is logged in
  
}