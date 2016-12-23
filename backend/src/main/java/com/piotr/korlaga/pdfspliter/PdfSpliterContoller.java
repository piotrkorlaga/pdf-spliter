package com.piotr.korlaga.pdfspliter;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import static javax.ws.rs.core.Response.Status.OK;

/**
 * Created by piotrkorlaga on 21/12/2016.
 */
@Component
@KarskiDaniel
@Path("/")
public class PdfSpliterContoller {
    @GET
    @Produces("application/json")
    @Path("/hello")
    public Response sayHello() {
        return Response.status(OK).entity(new PdfSpliter("Helllo world")).build();
    }
}
