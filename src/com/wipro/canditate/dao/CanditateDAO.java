import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CandidateDAO {
    private Connection conn;

    public CandidateDAO(Connection conn) {
        this.conn = conn;
    }

    public void addCandidate(CandidateBean candidate) throws SQLException {
        String sql = "INSERT INTO candidates (id, name, age, department) VALUES (?, ?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, candidate.getId());
            pstmt.setString(2, candidate.getName());
            pstmt.setInt(3, candidate.getAge());
            pstmt.setString(4, candidate.getDepartment());
            pstmt.executeUpdate();
        }
    }

    public List<CandidateBean> getAllCandidates() throws SQLException {
        List<CandidateBean> candidates = new ArrayList<>();
        String sql = "SELECT * FROM candidates";
        try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                candidates.add(new CandidateBean(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getInt("age"),
                    rs.getString("department")
                ));
            }
        }
        return candidates;
    }
}
