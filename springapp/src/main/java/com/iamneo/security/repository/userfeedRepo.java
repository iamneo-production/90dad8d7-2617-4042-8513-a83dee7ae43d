package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.UserFeed;

public interface userfeedRepo extends JpaRepository<UserFeed,Integer> {

}
