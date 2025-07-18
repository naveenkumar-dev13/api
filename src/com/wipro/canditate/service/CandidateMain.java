import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

public class CandidateMain {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database";
        String user = "your_username";
        String password = "your_password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            CandidateDAO candidateDAO = new CandidateDAO(conn);

            // Adding a candidate
            CandidateBean newCandidate = new CandidateBean(1, "John Doe", 25, "IT");
            candidateDAO.addCandidate(newCandidate);
            System.out.println("Candidate added successfully.");

            // Retrieving all candidates
            List<CandidateBean> candidates = candidateDAO.getAllCandidates();
            for (CandidateBean candidate : candidates) {
                System.out.println(candidate);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
