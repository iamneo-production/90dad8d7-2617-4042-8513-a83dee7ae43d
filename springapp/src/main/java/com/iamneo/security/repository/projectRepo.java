package com.iamneo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import  com.iamneo.security.entity.Employee;
import com.iamneo.security.entity.Project;
@Repository
public interface projectRepo extends JpaRepository<Project,Integer> {
	@Query(value = "SELECT count(*) FROM _project p where p.status='active' ", nativeQuery = true)
	Integer findAllActive();
	@Query(value = "SELECT count(*)  FROM _project p where p.status='approved' ", nativeQuery = true)
	Integer findAllassigned();
	@Query(value = "SELECT count(*)  FROM _project p where p.status='cancelled' ", nativeQuery = true)
	Integer findAllcancelled();
	@Query(value = "SELECT count(*)  FROM _project p ", nativeQuery = true)
	Integer findAllproj();

}
