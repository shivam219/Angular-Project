package com.ess.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ess.model.User;
import com.ess.respository.FormRespository;

@RestController
@CrossOrigin
public class FormController {

	@Autowired
	FormRespository formRespository;

	@GetMapping(value = "/form")
	public String getMethodName() {
		return "hisvdasdfdashfhdsa";
	}

	@PostMapping(value = "/formsave")
	public ResponseEntity<Object> formSave(@RequestBody User user) {
		System.out.println(user);
		return ResponseEntity.of(Optional.of(formRespository.save((user))));
	}

}
