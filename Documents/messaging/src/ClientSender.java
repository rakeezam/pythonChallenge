import java.io.*;
// Repeatedly reads recipient's nickname and text from the user in two
// separate lines, sending them to the server (read by ServerReceiver
// thread).
public class ClientSender extends Thread {
  private String iD;
  private boolean check = true;
  private PrintStream server;

  //String "command" does functions register, login, logout, quit
  //replace while loop with if..register = & readLine()
  ClientSender(String iD, PrintStream server) {
    this.iD = iD;
    this.server = server;
  }
  public void run() {
    // So that we can use the method readLine:
    BufferedReader user = new BufferedReader(new InputStreamReader(System.in));
    try {
      // Then loop forever sending messages to recipients via the server:
      
      while(check) {
    	  
    	  String command = user.readLine();
    	  String username = user.readLine();
    	  String text = user.readLine();
    	  
    	  if(command.equals("register")) {
    		  server.println(username);
    		  server.println(text);
    		  System.out.println(username);
    	  }
    	  else if(command.equals("login")) {
    		  server.println(username);
    		  server.println(text);
    	  }
    	  else if(command.equals("msg")) {
    		  server.println(username);
    		  System.out.println(username);
    		  server.println(text);
    		  System.out.println(text);
    	  }
    	  else if(command.equals("logout")) {
    		  
    	  }
    	  else if(command.equals("quit")) {
    		  check = false;
    	  }
      }
      
    }
    catch (IOException e) {
      Report.errorAndGiveUp("Communication broke in ClientSender" 
                        + e.getMessage());
    }
  }
}

