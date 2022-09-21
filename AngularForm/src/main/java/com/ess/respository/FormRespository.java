package com.ess.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ess.model.User;

@Repository
public interface FormRespository extends JpaRepository<User, Long> {
	
}
