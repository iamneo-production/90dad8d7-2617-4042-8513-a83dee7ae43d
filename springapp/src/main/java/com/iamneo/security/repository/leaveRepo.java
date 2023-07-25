package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import  com.iamneo.security.entity.Leave;


@Repository
public interface leaveRepo extends JpaRepository<Leave,Integer> {

}
