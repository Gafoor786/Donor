package com.bala.donation.config.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bala.donation.config.model.ConfigModel;
import com.bala.donation.user.entity.ConfigEntity;
import com.bala.donation.user.repo.ConfigRepo;

@Component
public class ConfigService {

    @Autowired
    ConfigRepo configRepo;

    @Transactional
    public void addConfig(ConfigModel config) {
        ConfigEntity entity = toEntity(config);
        configRepo.save(entity);
    }

    public List<ConfigModel> getAllConfig() {
        List<ConfigEntity> entities = configRepo.findAll();

        List<ConfigModel> models = entities.stream().map((entity) -> {
            return toModel(entity);
        }).collect(Collectors.toList());

        return models;
    }

    @Transactional
    public void updateConfig(Long id, ConfigModel config) {
        ConfigEntity entity = configRepo.findOne(id);
        toEntity(config, entity);
        configRepo.save(entity);
    }

    public void deleteConfig(Long id) {
        ConfigEntity entity = configRepo.findOne(id);

        configRepo.delete(entity);
    }

    public ConfigModel getConfigById(Long id) {
        ConfigEntity entity = configRepo.findOne(id);
        return toModel(entity);
    }

    public List<ConfigModel> getConfigByModule(String moduleName) {
        List<ConfigEntity> entities = configRepo.findByModule(moduleName);

        return entities.stream().map(this::toModel).collect(Collectors.toList());
    }

    private ConfigEntity toEntity(ConfigModel config) {
        ConfigEntity entity = new ConfigEntity();
        return toEntity(config, entity);
    }

    private ConfigEntity toEntity(ConfigModel config, ConfigEntity entity) {
        entity.setModule(config.getModule());
        entity.setName(config.getName());
        entity.setDescription(config.getDescription());
        entity.setValue(config.getValue());
        entity.setStatus(config.getStatus());
        return entity;
    }

    private ConfigModel toModel(ConfigEntity entity) {
        ConfigModel config = new ConfigModel();
        config.setId(entity.getId());
        config.setModule(entity.getModule());
        config.setName(entity.getName());
        config.setDescription(entity.getDescription());
        config.setValue(entity.getValue());
        config.setStatus(entity.getStatus());
        return config;
    }

}
