package com.piotr.korlaga.pdfspliter;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import static javax.ws.rs.core.Response.Status.INTERNAL_SERVER_ERROR;
import static javax.ws.rs.core.Response.Status.OK;

/**
 * Created by piotrkorlaga on 21/12/2016.
 */
@Component
@Path("/")
public class PdfSpliterContoller {

    @Autowired
    private PdfSplitterService pdfSplitterService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/healthcheck")
    public Response healthCheck() {
        return Response.status(OK).entity(new PdfSpliter("I'm running")).build();
    }

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces("application/pdf")
    @Path("/upload")
    public Response uploadFile(@FormDataParam("file") InputStream is, @FormDataParam("file") FormDataContentDisposition fileDetails, @FormDataParam("from")
            int from, @FormDataParam("to") int to) {

        try {
            ByteArrayOutputStream splittedFile = pdfSplitterService.split(is, from, to);
            return Response.status(OK).entity(splittedFile.toByteArray()).build();
        } catch (IOException e) {
            return Response.status(INTERNAL_SERVER_ERROR).build();
        }

    }

}
