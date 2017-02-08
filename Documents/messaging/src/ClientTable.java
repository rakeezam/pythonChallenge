// Each nickname has a different incomming-message queue.
import java.util.ArrayList;
import java.util.concurrent.*;
public class ClientTable {
  private ConcurrentMap<String,MessageQueue> queueTable
    = new ConcurrentHashMap<String,MessageQueue>();//add another hashmap thats int string creates clientTable to check that no more than one user
  // The following overrides any previously existing nickname, and
  // hence the last client to use this nickname will get the messages
  // for that nickname, and the previously exisiting clients with that
  // nickname won't be able to get messages. Obviously, this is not a
  // good design of a messaging system. So I don't get full marks:
  public void add(String iD) {
    queueTable.put(iD, new MessageQueue());
  }
  // Returns null if the nickname is not in the table:
  public MessageQueue getQueue(String iD) {
    return queueTable.get(iD);
  }
  //arrays for username
  
  private ArrayList<String> clientID = new ArrayList<String>();
  
    public void registerUsername(String username) {
	  //if(!=clientID) {
		  //clientID.add(username);
	  //}
    }
   
    public void isRegistered(String users) {
  	  //if(users=)
  		  //user.add()
    }
    
    public void isLoggedIn(String users) {
    	
    }

  
  //two tables added, array list and hashmap table for no more than one, if string emoty not logged in, and string length is logged in
  
}