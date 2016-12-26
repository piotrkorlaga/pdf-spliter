package com.piotr.korlaga.pdfspliter;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

/**
 * Created by piotrkorlaga on 21/12/2016.
 */

@Configuration
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(PdfSpliterContoller.class);
        register(MultiPartFeature.class);
    }
}

